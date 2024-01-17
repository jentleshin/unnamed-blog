import { ListType } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from "./List.module.scss";
interface IProps {
  children?: any;
  type?: ListType;
  className?: string;
}

const List = ({ children, type = ListType.disc, className }: IProps) => {
  return (
    <ul className={combineClasses(classes.list, type, "pl-[30px]", className)}>
      {children}
    </ul>
  );
};

export default List;
