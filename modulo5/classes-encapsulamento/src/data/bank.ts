import UserAccount from "./userAccount";

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts ()  {
    return {accounts: this.accounts}
  }
}
