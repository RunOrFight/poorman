import { useEnemyFieldsSelector, useEnemySelector } from "../store";
import { Card, Field } from "../ui";

const Enemy = () => {
  const cardsInHand = useEnemySelector().cardsInHand;
  const fields = useEnemyFieldsSelector();
  return (
    <div className="h-full w-full flex flex-col p-2.5">
      <div className="w-full h-full border flex gap-2.5 items-center p-2.5">
        {cardsInHand.map((card) => (
          <Card key={card.id} id={card.id} />
        ))}
      </div>
      <div className="flex justify-center h-full    ">
        {fields.map((field) => (
          <Field id={field.id} key={field.id} card={field.data} />
        ))}
      </div>
    </div>
  );
};

export default Enemy;
