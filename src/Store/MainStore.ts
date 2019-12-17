import { configure, observable, action, runInAction, computed } from "mobx";

import { Get } from "Service/request";
import { formatDate } from "Utils/dateFormat";

configure({ enforceActions: "always" });

export class MainStore {
  @observable loading = false;
  @observable allFaq: Array<Faq> = [];

  @observable searchString = "";

  constructor() {
    this.getFaqs();
  }

  @action
  onSearchChange = (str: string) => {
    this.searchString = str;
  };

  @computed
  get searchFaq() {
    if (this.searchString !== "") {
      const search = new RegExp(this.searchString, "i");

      return this.allFaq.filter(faq => search.test(faq.question));
    }

    return this.allFaq;
  }

  @action
  getFaqs = async () => {
    this.loading = true;

    try {
      const response = await Get<FaqResponse>("/parse/classes/FAQ");

      const faqs = (response.data?.results ?? [])
        .sort((a, b) => (a.position > b.position ? 1 : -1))
        .map(data => ({ ...data, updatedAt: formatDate(data.updatedAt) }));

      runInAction(() => {
        this.allFaq = faqs;
      });
    } catch (error) {
      console.warn("Error", error.message);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  removeFaq = (faqId: string) => {
    const idx = this.allFaq.findIndex(i => i.objectId === faqId);
    if (idx !== undefined) this.allFaq.splice(idx, 1);
  };
}

interface Faq {
  objectId: string;
  position: number;
  createdAt: string;
  updatedAt: string;
  answer: string;
  group: string;
  question: string;
  approved: boolean;
  visible: boolean;
}

interface FaqResponse {
  results: Faq[];
}
