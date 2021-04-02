import { Request, Response } from "express";

class Controller {
  private static instance: Controller;

  constructor() { }

  public static getInstance(): Controller {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }

  public async getItem(req: Request, res: Response) {
   return res.json('dummy get')
  }
  public async deleteItem(req: Request, res: Response) {
    return res.json('dummy delete')
   }
 }


export { Controller };
