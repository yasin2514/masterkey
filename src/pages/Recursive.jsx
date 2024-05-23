import { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { v4 as uuidv4 } from "uuid";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// eslint-disable-next-line react/prop-types
const Partition = ({ partition, onSplit, onRemove }) => {
  // eslint-disable-next-line react/prop-types
  const { id, color, direction, children } = partition;

  return (
    <ResizableBox
      className="relative outline"
      width={300}
      height={300}
      minConstraints={[100, 100]}
      maxConstraints={[Infinity, Infinity]}
    >
      <div className="w-full h-full" style={{ backgroundColor: color }}>
        <div className="absolute top-2 left-2">
          <div className=" flex flex-wrap space-x-2">
            <button onClick={() => onSplit(id, "V")}>V</button>
            <button onClick={() => onSplit(id, "H")}>H</button>
            <button
              onClick={() => onRemove(id)}
              className="rounded-full bg-white text-red-500 p-0 size-7 flex items-center justify-center"
            >
              X
            </button>
          </div>
        </div>
        <div
          className={`flex ${
            direction === "V" ? "flex-row" : "flex-col"
          } w-full h-full`}
        >
          {children?.map((child) => (
            <Partition
              key={child.id}
              partition={child}
              onSplit={onSplit}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    </ResizableBox>
  );
};

const Recursive = () => {
  const [partitions, setPartitions] = useState([
    {
      id: uuidv4(),
      color: getRandomColor(),
      direction: null,
      children: [],
    },
  ]);

  const handleSplit = (id, direction) => {
    setPartitions((prevPartitions) => {
      const newPartitions = JSON.parse(JSON.stringify(prevPartitions));
      const splitPartition = findPartitionById(newPartitions, id);
      if (splitPartition) {
        splitPartition.direction = direction;
        splitPartition.children = [
          {
            id: uuidv4(),
            color: splitPartition.color,
            direction: null,
            children: [],
          },
          {
            id: uuidv4(),
            color: getRandomColor(),
            direction: null,
            children: [],
          },
        ];
      }
      return newPartitions;
    });
  };

  const handleRemove = (id) => {
    setPartitions((prevPartitions) => {
      const newPartitions = JSON.parse(JSON.stringify(prevPartitions));
      removePartitionById(newPartitions, id);
      return newPartitions;
    });
  };

  const findPartitionById = (partitions, id) => {
    for (const partition of partitions) {
      if (partition.id === id) {
        return partition;
      }
      const found = findPartitionById(partition.children, id);
      if (found) return found;
    }
    return null;
  };

  const removePartitionById = (partitions, id) => {
    for (let i = 0; i < partitions.length; i++) {
      if (partitions[i].id === id) {
        partitions.splice(i, 1);
        return true;
      }
      if (removePartitionById(partitions[i].children, id)) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      {partitions.map((partition) => (
        <Partition
          key={partition.id}
          partition={partition}
          onSplit={handleSplit}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Recursive;
