import { useCallback } from "react";
import { Handle, Position } from "reactflow";

// const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable }: any) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      style={{
        border: "1px solid #222138",
        borderRadius: 10,
        padding: 10,
        width: 200,
        borderColor: "#0099ff",
      }}
    >
      <div>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>

      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        // style={{
        //   left: "50%",
        // }}
        isConnectable={isConnectable}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{
          left: "10px",
        }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
