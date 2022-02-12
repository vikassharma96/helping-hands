import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoRequest } from '../../store/todo/actions';
import Button from 'react-bootstrap/Button';
import { AppState } from '../../store/rootReducer';
import { Row } from 'react-bootstrap';

const DummyComponent: React.FC = () => {
  const todoData = useSelector((state: AppState) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="DummyComponent" style={{ margin: 25 }}>
      <h1>Helping Hands</h1>
      <Button
        variant="primary"
        onClick={() => dispatch(fetchTodoRequest())}
      >
        Fetch Todos
      </Button>
      {todoData.todos.map((row, key) => (
        <Row key={key}>{row.title}</Row>
      ))}
    </div>
  );
};

export default DummyComponent;
