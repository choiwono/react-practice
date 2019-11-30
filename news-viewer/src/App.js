import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
       const response = await axios.get(
         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=ddb44ba0247a406088ad0e17183fb4b6',
       );
       setData(response.data);
    } catch(e) {
       console.log(e);
    }  
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
      </div>
    </div>
  );
};

export default App;