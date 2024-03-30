import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function GoalList() {
  const dispatch = useDispatch();
  const goals = useSelector((store) => store.goals);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_GOALS', payload: user.id });
  }, []);

  return (
    <section className="goals">
      {goals.map((goals) => {
        return (
          <div key={goals.id}>
            <h4>{goals.book_title}</h4>
            <h4>{goals.number}</h4>
            <h4>{goals.chp_pgs}</h4>
            <h4>{goals.deadline}</h4>
          </div>
        );
      })}
    </section>
  );
}

export default GoalList;
