export interface DetailItem {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

// Rename BudgetSection to TaxSection to match App.tsx logic
export interface TaxSection {
  title: string;
  summary: string;
  items: DetailItem[];
}

export interface BudgetContent {
  mainSummary: string;
  economicSurvey: TaxSection; // Add this line
  directTax: TaxSection;   // Changed from BudgetSection
  indirectTax: TaxSection; // Changed from BudgetSection
}