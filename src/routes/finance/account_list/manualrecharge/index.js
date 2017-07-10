import React from 'react'
import { Table, Row, Col } from 'antd';
import { Input } from 'antd';
const Search = Input.Search;

const columns = [{
  title: '流水号', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '充值金额', dataIndex: 'item2', key: 'item2', }, {
  title: '用户UID', dataIndex: 'item3', key: 'item3', }, {
  title: '注册手机', dataIndex: 'item4', key: 'item4', }, {
  title: '商家名称', dataIndex: 'item5', key: 'item5', }, {
  title: '申请时间', dataIndex: 'item6', key: 'item6', }, {
  title: '处理时间', dataIndex: 'item7', key: 'item7', }, {
  title: '充值来源', dataIndex: 'item8', key: 'item8', }, {
  title: '充值状态', dataIndex: 'item9', key: 'item9', }, {
  title: '充值说明', dataIndex: 'item10', key: 'item10', }
];




const data = [{
  key: '1',
  item1: ' 17050003',
  item2: ' 2000.00',
  item3: ' 1705012345',
  item4: ' 13989456668',
  item5: ' 未设置',
  item6: ' 2017-05-02 12:01:27',
  item7: ' 2017-05-02 12:01:27',
  item8: ' PC-支付宝',
  item9: ' 已成功',
  item10: ' 支付宝流水号20123333',
}];



export default class Users extends React.Component {
  render(){
    return (
      <div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            <Search 
              placeholder="输入搜索关键字"
              style={{ width: 200, float:"right" }}
              size="large"
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }
}
