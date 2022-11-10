import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export function MinusSign({ action }) {
  return <FontAwesomeIcon onClick={action} icon={faMinus} />;
}
