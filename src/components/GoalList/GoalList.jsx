import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function GoalList() {
  const dispatch = useDispatch();
  const goals = useSelector((store) => store.goals);

  useEffect(() => {
    dispatch({ type: 'FETCH_GOALS' });
  }, []);

  return (
    <section className="goals">
      {goals.map((goals) => {
        return (
          <div key={goals.id}>
            <h4>{goals.book_title}</h4>
          </div>
        );
      })}
    </section>
  );
}

export default GoalList;
