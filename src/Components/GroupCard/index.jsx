import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";

import { GroupCardContainer } from "../../Styles/global";

import EditGroupsModal from "../EditHabitsModal";

const GroupCard = ({ group }) => {
  const { subscribeGroups } = useContext(GroupsContext);

  const token = localStorage.getItem("@Habits:token");

  const [modalEdit, setModalEdit] = useState(false);

  const handleclickSubscribe = () => {
    subscribeGroups(group.id, token);
  };

  return (
    <GroupCardContainer>
      <h3>Nome do grupo: {group.name}</h3>
      <h3>ID: {group.id}</h3>
      <button onClick={() => handleclickSubscribe()}>Inscrever-se</button>
      <EditGroupsModal
        group_id={group.id}
        token={token}
        setModalEdit={setModalEdit}
        modalEdit={modalEdit}
      />
    </GroupCardContainer>
  );
};

export default GroupCard;