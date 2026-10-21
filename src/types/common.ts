
export type DateString = string;

export type DateTimeString = string;

export type SortOrder = 'newest' | 'oldest' | 'name';

export type Box = 'sent' | 'received';



/** מבנה כל שגיאה שחוזרת מהשרת */
export interface ApiErrorBody {
  error: {
    code: string;
    message: string;
    details?: { field: string; message: string }[];
  };
}