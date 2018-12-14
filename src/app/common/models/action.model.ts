/********************************
 * action.model
 * Class declaration
 *******************************/
export interface Action {
  title: string;
  image?: string;
  speech: string;
  actions?: Action[];
}