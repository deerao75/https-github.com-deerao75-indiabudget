
export interface DetailItem {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

export interface BudgetSection {
  title: string;
  summary: string;
  items: DetailItem[];
}

export interface BudgetContent {
  mainSummary: string;
  directTax: BudgetSection;
  indirectTax: BudgetSection;
}
