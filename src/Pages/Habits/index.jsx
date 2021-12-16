import { useState, useEffect, useContext } from "react";

import { HabitsContext } from "../../Providers/habits";

import HabitList from "../../Components/HabitList";
import AddHabitsModal from "../../Components/AddHabitsModal";

import {
  HabitPageContainer,
  SectionTitle,
  ButtonAdd,
  AddIcon,
} from "../../Styles/global";

import Header from "../../Components/Header";

const Habits = () => {
  const { habits, getHabits } = useContext(HabitsContext);

  const [token] = useState(JSON.parse(localStorage.getItem("@Habits:token")));
  const [rendered, setRendered] = useState(false);
  const [modalHabits, setModalHabits] = useState(false);

  useEffect(() => {
    getHabits(token);
    setRendered(true); // eslint-disable-next-line
  }, [token]);

  const handleClickAdd = () => {
    setModalHabits(true);
  };

  return (
    <div>
      <Header />
      <HabitPageContainer>
        <SectionTitle>
          Meus hábitos:
          <ButtonAdd onClick={() => handleClickAdd()}>
            <AddIcon
              src="https://www.iconpacks.net/icons/1/free-plus-icon-321-thumb.png"
              alt="Adicione um novo hábito"
            />
          </ButtonAdd>
        </SectionTitle>
        {rendered ? (
          habits.length > 0 ? (
            <HabitList />
          ) : (
            <h2>Adicione Hábitos</h2>
          )
        ) : null}
      </HabitPageContainer>
      <AddHabitsModal
        modalHabits={modalHabits}
        setModalHabits={setModalHabits}
        token={token}
      />
    </div>
  );
};

export default Habits;
