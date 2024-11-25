import { useParams } from 'react-router-dom';
 
export default function StudentPage() {
  const { name } = useParams();
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
      const fetchStudent = async () => {
          try {
              const response = await fetch(`http://localhost:3000/api/v1/students/${id}`);
              const data = await response.json();
              setStudent(data);
          } catch (error) {
              console.error('Error fetching student:', error);
          }
      };

      fetchStudent();
  }, [id]);

  return (
    <>
      <h1>{name}</h1>
      <p>{student.name}</p>
      <p>{student.id}</p>
    </>
  );
}