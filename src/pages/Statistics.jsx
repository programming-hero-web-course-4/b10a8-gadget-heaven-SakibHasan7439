
import { useLoaderData } from 'react-router-dom';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
  Area,
} from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="product_title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="price" barSize={40} fill="#413ea0" />
                <Scatter dataKey="rating" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;