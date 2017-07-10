import React from 'react'
import { Tree, Button } from 'antd';
const TreeNode = Tree.TreeNode;

export default class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  render() {
    return (
      <div>
      <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="用户管理" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
      <div style={{textAlign: "center", position: "absolute", left: "0", right: "0", bottom: "24px"}}>
        <Button type="primary" size="large" style={{marginRight:"10px"}}>保存</Button>
        <Button size="large">取消</Button>
      </div>
      </div>
    );
  }
}

