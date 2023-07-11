import { useEnemyFieldsSelector, useEnemySelector } from '../store';
import { Card, Field } from '../ui';

const Enemy = () => {
  const cardsInHand = useEnemySelector().cardsInHand;
  const fields = useEnemyFieldsSelector();

  return (
    <div className="w-full h-full flex flex-col enemy">
      <div className="w-full flex justify-center h-[190px] items-center hand pt-[27px] pb-[22px]">
        {cardsInHand.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <div className="flex justify-center h-full gap-[30px] items-center">
        {fields.map((field) => (
          <Field id={field.id} key={`enemy_${field.id}`} card={field.data} />
        ))}
      </div>
    </div>
  );
};

export default Enemy;
