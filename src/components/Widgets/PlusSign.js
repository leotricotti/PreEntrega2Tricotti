import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function PlusSign({ action }) {
  return <FontAwesomeIcon onClick={action} icon={faPlus} />;
}
