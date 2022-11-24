import { LegalRepresentativeModel } from "./legal.representative.model";

export interface CompanyModel {
  name?: string,
  commercialName?: string,
  document?: string,
  mobile?: string,
  quotationUser?: number,
  logo?: string,
  legalRepresentative?: LegalRepresentativeModel
}

