/* export const FORM_ERR_MESG : { [key: string]: any } = {
  saved: "Elemento salvato",
  warning: "Compila tutti i campi",
  dangerYear: "Errore: probabilmente hai già inserito i dati per quest'anno",
  dangerDrain: "Errore: probabilmente hai già inserito i dati per questa canaletta",
  dangerUser: "Errore: probabilmente hai già inserito i dati per quest'utente",
  email: "Inserisci una mail valida",
  required: "Campo obbligatorio"
} as const;
 */

export class GlobalConstants {

  public static FORM_ERR_MESG : { [key: string]: any } = {
    saved: "Elemento salvato",
    warning: "Compila tutti i campi",
    dangerYear: "Errore: probabilmente hai già inserito i dati per quest'anno",
    dangerDrain: "Errore: probabilmente hai già inserito i dati per questa canaletta",
    dangerUser: "Errore: probabilmente hai già inserito i dati per quest'utente",
    email: "Inserisci una mail valida",
    required: "Campo obbligatorio"
  }
  

}