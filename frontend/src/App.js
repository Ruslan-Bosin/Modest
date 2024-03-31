import { Button, Descriptions, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Cell from "./components/Cell";

const descriptionItems = [
  {
    key: '1',
    label: 'Входные данные',
    children: <>
      <Descriptions layout="vertical" items={[
        {
          key: '3',
          label: 'Количество комнат на этаж',
          children: "4"
        },
        {
          key: '4',
          label: 'Окна на этаже',
          children: "3 2 1"
        }
      ]} />
    </>,
  },
  {
    key: '2',
    label: 'Ответ',
    children: <>
      <Descriptions layout="vertical" items={[
        {
          key: '5',
          label: 'Количество комнат',
          children: "8"
        },
        {
          key: '6',
          label: 'Номера комнат',
          children: "1, 2, 4, 6, 7, 8, 11, 12"
        }
      ]} />
    </>,
  },
];

// Styles
const body = {
  postion: "absolute",
  width: "100vw",
  height: "100vh",
  background: "#F5F5F5FF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const main = {
  background: "white",
  padding: "2%",
  borderRadius: "2%",
  width: "80%",

  display: "flex",
  flexDirection: "column",
  gap: "20px"
}

const header = {
  display: "flex",
  gap: "2px"
}

const modal = {
  display: "flex",
  flexDirection: "column",
  gap: "5px"
}

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [columns, setColumns] = useState(4)
  const [rows, setRows] = useState(2)
  const [input2, setInput2] = useState();

  const [options, setOptions] = useState([
    { value: 'd1', label: '1st december' },
    { value: 'd1', label: '....' },
  ])

  const [cellsData, setCellsData] = useState({
    rowsCount: 2,
    columnsCount: 4,
    data: [
      {
        id: 1,
        colored: true,
        roomNumber: 4
      },
      {
        id: 1,
        colored: false,
        roomNumber: 4
      },
      {
        id: 1,
        colored: true,
        roomNumber: 4
      },
      {
        id: 1,
        colored: true,
        roomNumber: 4
      },
      {
        id: 1,
        colored: false,
        roomNumber: 4
      },
      {
        id: 1,
        colored: false,
        roomNumber: 4
      },
      {
        id: 1,
        colored: true,
        roomNumber: 4
      },
      {
        id: 1,
        colored: true,
        roomNumber: 4
      },
    ]
  })

  // Styles with state
  const grid = {
    display: "grid",
    gridTemplateColumns: `repeat(${cellsData.columnsCount}, 1fr)`,
    gridTemplateRows: `repeat(${cellsData.rowsCount}, 1fr)`,
    width: "100%",
    gap: "10px 10px"
  };

  const min_grid = {
    display: "grid",
    gridTemplateColumns: `repeat(${cellsData.columns}, 1fr)`,
    gridTemplateRows: `repeat(${cellsData.rows}, 1fr)`,
    width: "100%",
    gap: "10px 10px"
  }

  return (
    <div style={body}>
      <div style={main}>
        <div style={header}>
          <Select placeholder="Выбор даты" options={options} style={{ width: "100%" }} />
          <Button onClick={() => { setIsModalOpen(true) }}>Добавить</Button>
        </div>
        <div style={grid}>
          {cellsData.data.map(cell => {
            return <Cell key={cell.id} colored={cell.colored}></Cell>
          })}
        </div>
        <div>
          <Descriptions layout="horizontal" bordered items={descriptionItems} />
        </div>
      </div>
      <Modal title="Добавление" open={isModalOpen} onOk={() => { }} onCancel={() => { setIsModalOpen(false) }}>
        <div style={modal}>
          <Input value={columns} onChange={event => {
            setColumns(Number(event.target.value));
          }} placeholder="Количество комнат на этаж" />
          <Input value={input2} onChange={event => {
            setInput2(event.target.value);
            const parts = event.target.value.split(' ');
            var result = 0;
            parts.map(item => {
              result += Number(item)
            })
            setRows(result);
          }} placeholder="Окна на этаже" />
          <div style={min_grid}>
            {Array.from(Array(columns * rows).keys()).map(index => {
              return <Cell key={index + 1} colored={false}></Cell>
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
