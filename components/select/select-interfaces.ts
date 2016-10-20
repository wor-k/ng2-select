export interface OptionsBehavior {
  first():any;
  last():any;
  prev():any;
  next():any;
  all():any;
  filter(query:RegExp):any;
}
