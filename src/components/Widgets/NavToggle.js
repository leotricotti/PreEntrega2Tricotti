import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function NavToggle({ action }) {
  return <FontAwesomeIcon onClick={action} icon={faBars} />;
}
