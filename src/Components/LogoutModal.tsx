import {  Modal } from 'antd'

function LogOutModal(props) {
    const { handleOk, handleCancel, confirmLoading, open,okButtonProps } = props


    return (
        <Modal title="Logout" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel} okButtonProps={okButtonProps} >
            <div className="mx-auto user_modal_text">
                <p>Are You sure you want to logout?</p>
            </div>
        </Modal>
    )
}

export default LogOutModal
