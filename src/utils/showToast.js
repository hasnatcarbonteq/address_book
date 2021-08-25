import {notification} from "antd";

const ShowToast = (message, type = "info", description = "") => {
    notification[type]({
      message: message,
      description: description,
      placement: "topLeft",
      duration: 0,
      style: {borderRadius: "30px"}
    });
};
  
export default ShowToast;