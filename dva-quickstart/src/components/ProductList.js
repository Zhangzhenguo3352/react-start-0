import React, { PropTypes } from 'react';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render(text, record) {
        // onConfirm 是 Popconfirm 上的事件，它有一个方法叫delete 
        // okText 是 yes
        // cancelText 是  no
        // placement 弹出框的位置可以选择

        return (
          <Popconfirm title="Delete?" placement="bottom" onConfirm={onDelete.bind(this, record.id)} okText="确认删掉" cancelText="不删掉">
            <Button>删除</Button>
          </Popconfirm>
        );
      },
    },
  ];
  // Table 表单上面 有踏出删除按钮，点删除按钮 出现弹出框
  return (
    <Table
      dataSource={products}
      columns={columns}/>
  );
};

ProductList.proptypes = {
  onDelete: PropTypes.func.isRequired, // 我要的是一个函数类型
  products: PropTypes.array.isRequired,
};


export default ProductList;