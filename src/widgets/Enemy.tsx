import { useEnemyFieldsSelector, useEnemySelector } from '../store';
import { Card, Field } from '../ui';

const Enemy = () => {
  const cardsInHand = useEnemySelector().cardsInHand;
  const fields = useEnemyFieldsSelector();

  return (
    <div className="h-full w-full flex flex-col p-2.5 enemy">
      <div className="w-full h-full flex justify-center gap-2.5 items-center p-2.5 hand">
        {cardsInHand.map((card) => (
          <div key={card.id} className={'grow max-w-[170px]'}>
            <Card {...card} />
          </div>
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
