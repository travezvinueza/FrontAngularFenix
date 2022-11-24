import { LegalRepresentativeModel } from "./legal.representative.model";

export class CompanyModel {
  constructor(
    public name: string,
    public tradeName: string,
    public ruc: string,
    public phone: string,
    public phoneMobile: string,
    public quotationUser: number,
    public logo: string,
    public legalRepresentative: LegalRepresentativeModel
  ) { }
}

