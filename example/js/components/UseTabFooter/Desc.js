import React from 'react'

const Desc = () => {
    return (
        <div className="demo-desc">
            <table>
                <caption>TabsFooter Properties</caption>
                <thead>
                <tr>
                    <th>name</th><th>type</th><th>default</th><th>description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>selectedIndex</td>
                    <td>number</td>
                    <td>0</td>
                    <td>默认选中tab的index</td>
                </tr>
                <tr>
                    <td>changeAction</td>
                    <td>function</td>
                    <td>{'() => {}'}</td>
                    <td>当tab选中状态改变时调用</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>string</td>
                    <td></td>
                    <td>tab唯一的name值.controlled component</td>
                </tr>
                </tbody>
            </table>
            <table>
                <caption>Tab Properties</caption>
                <thead>
                <tr>
                    <th>name</th><th>type</th><th>default</th><th>description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td>
                    <td>string</td>
                    <td></td>
                    <td>tab唯一的value值.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>string</td>
                    <td>'tabName'</td>
                    <td>标签内文字</td>
                </tr>
                <tr>
                    <td>onClick</td>
                    <td>function</td>
                    <td>{'() => {}'}</td>
                    <td>点击标签触发click事件.参数：tab(当前点击的tab实例)</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>React Component</td>
                    <td></td>
                    <td>icon图标。适用于TabsFooter下的Tab:icon在上，文字在下。可添加class控制其位置</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Desc