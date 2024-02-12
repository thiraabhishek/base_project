// import { Select, Form, Space, Button } from 'antd'
// import { PlusOutlined } from '@ant-design/icons';
// import { useState } from 'react';

// interface ColumnType {
//   onFinish: () => void
//   handleSelectChange: () => void
// }

// const AddColumns: React.FC<ColumnType> = (props) => {
//   const { onFinish, handleSelectChange } = props
  
//   const [selects, setSelects] = useState([{ id: 1 }]);

//   const handleAddSelect = () => {
//     const newId = selects.length + 1;
//     setSelects([...selects, { id: newId }]);
//   };

//   return (
//     <div className="add_column_container">
//       <div className="login_form_box">
//         <Form onFinish={onFinish}>
//         <Form.Item
//       name={[name, 'first']}
//       rules={[{ required: true, message: 'Missing first name' }]}
//     >
//       <Input placeholder="First Name" />
//     </Form.Item>
//           <Space wrap>
//             {/* <Select
//               defaultValue="Please select column"
//               onChange={handleSelectChange}
//               options={[
//                 { label: 'VARCHAR(formatted)', value: 'VARCHAR(245)' ,defaultValue:''},
//                 { label: 'VARCHAR (formatted,long)', value: 'VARCHAR(2045)',defaultValue:'' },
//                 {
//                   label: 'VARCHAR (formatted,long,with summary)',
//                   value: 'VARCHAR(5045)',
//                   defaultValue:''
//                 },
//                 { label: 'INT(Number)', value: 'INT(11)',defaultValue:null },
//                 { label: 'INTEGER(Number)', value: 'INTEGER(255)',defaultValue:null },
//                 { label: 'BIGINT(Number)', value: 'BIGINT(255)',defaultValue:null },
//                 { label: 'FLOAT', value: 'FLOAT',defaultValue:null },
//                 { label: 'DECIMAL (Number)', value: 'DECIMAL(65)',defaultValue:null },
//                 { label: 'DOUBLE(Number)', value: 'DOUBLE(53)',defaultValue:null },
//                 { label: 'BOOLEAN', value: 'BOOLEAN',defaultValue:0 },
//               ]}
//             /> */}

//      {selects.map((select, index) => (
     
//         <Select 
//         key={select.id} style={{ width: '100%', marginBottom: 10 }}  
//         defaultValue="Please select column"
//         onChange={handleSelectChange}
//         options={[
//           { label: 'VARCHAR(formatted)', value: 'VARCHAR(245)' ,defaultValue:''},
//           { label: 'VARCHAR (formatted,long)', value: 'VARCHAR(2045)',defaultValue:'' },
//           {
//             label: 'VARCHAR (formatted,long,with summary)',
//             value: 'VARCHAR(5045)',
//             defaultValue:''
//           },
//           { label: 'INT(Number)', value: 'INT(11)',defaultValue:null },
//           { label: 'INTEGER(Number)', value: 'INTEGER(255)',defaultValue:null },
//           { label: 'BIGINT(Number)', value: 'BIGINT(255)',defaultValue:null },
//           { label: 'FLOAT', value: 'FLOAT',defaultValue:null },
//           { label: 'DECIMAL (Number)', value: 'DECIMAL(65)',defaultValue:null },
//           { label: 'DOUBLE(Number)', value: 'DOUBLE(53)',defaultValue:null },
//           { label: 'BOOLEAN', value: 'BOOLEAN',defaultValue:0 },
//         ]}
//         />
        
//       ))}
//           </Space>

//           <Form.Item>
//             <Button type="dashed" onClick={handleAddSelect} block icon={<PlusOutlined />}>
//               Add field
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   )
// }

// export default AddColumns
