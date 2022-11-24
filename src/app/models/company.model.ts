import { LegalRepresentativeModel } from "./legal.representative.model";

export interface CompanyModel {
  name: string,
  tradeName: string,
  ruc: string,
  phone: string,
  phoneMobile: string,
  quotationUser: number,
  logo: string,
  legalRepresentative: LegalRepresentativeModel
}

