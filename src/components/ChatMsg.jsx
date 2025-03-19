const ChatMsg = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center">
        <img
          className="h-8 rounded-full px-2 m-2"
          src="https://imgs.search.brave.com/hWUZ4Qvcg8eYSjarlWCxrh5RfTG5FsOq3fweeC3ADyc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc"
          alt="user-icon"
        />
        <span className="font-bold px-2 mr-2">{name}</span>
        <span className="p-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMsg;
