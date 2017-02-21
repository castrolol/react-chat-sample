import io from 'socket.io-client';



export default function (){
    return io("http://ec2-52-67-81-18.sa-east-1.compute.amazonaws.com:3000");
}