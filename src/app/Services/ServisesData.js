import serciwIcon from '../../../asset/icon/serviceIcon/download (1).png'
import serciwIcon1 from '../../../asset/icon/serviceIcon/download (2).png'
import serciwIcon2 from '../../../asset/icon/serviceIcon/download.png'
import serciwImg from '../../../asset/img/serviceImg/services.jpg'



const data = [
    {
        id:"1",
        icon: serciwIcon,
        img:serciwImg,
        title: "Home Loan",
        disc: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    },
    {
        id:2,
        icon: serciwIcon1,
        img:serciwImg,
        title: "Personal Loan",
        disc: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    },
    {
        id:3,
        icon: serciwIcon2,
        img:serciwImg,
        title: "Business Loan",
        disc: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    },
     {
        id:4,
        icon: serciwIcon,
        img:serciwImg,
        title: "Home Loan",
        disc: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    },
    {
        id:5,
        icon: serciwIcon1,
        img:serciwImg,
        title: "Personal Loan",
        disc: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    },
    {
        id:6,
        icon: serciwIcon2,
        img:serciwImg,
        title: "Business Loan",
        disc: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    },

]

export function getServiceById(id) {
  return data.find((item) => item.id == id);
}

export default data;