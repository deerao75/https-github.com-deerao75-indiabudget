export interface TaxItem {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

// Renamed items from DetailItem[] to TaxItem[]
export interface TaxSection {
  title: string;
  summary: string;
  items: TaxItem[];
}

export interface BudgetContent {
  mainSummary: string;
  economicSurvey: TaxSection;
  directTax: TaxSection;
  indirectTax: TaxSection;
}