export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cell-with-img'>
          <img className='cell-img' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },

  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cell-with-status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '2snow@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '3snow@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '4snow@gmail.com',
    status: 'active',
    age: 16,
  },
  {
    id: 5,
    username: 'Targaryen',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '5snow@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '6snow@gmail.com',
    status: 'active',
    age: 15,
  },
  {
    id: 7,
    username: 'Clifford',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '7snow@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '8snow@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'active',
    age: 65,
  },
];

export const productColumns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'title', headerName: 'Title', width: 190 },
  { field: 'description', headerName: 'Description', width: 250 },
  {
    field: 'img',
    headerName: 'Image',
    width: 70,
    renderCell: (params) => {
      return (
        <div className='cell-with-img'>
          <img
            className='cell-img'
            src={params.row.img}
            alt={params.row.title}
          />
        </div>
      );
    },
  },
  { field: 'category', headerName: 'Category', width: 120 },
  { field: 'price', headerName: 'Price', width: 90 },
  { field: 'stock', headerName: 'Stock', width: 70 },
];

export const productRows = [
  {
    id: 1,
    title: 'iPhone',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia illo illum facere architecto perspiciatis veritatis debitis voluptatum labore accusamus earum ipsa, velit, molestiae corporis aspernatur delectus quis deserunt impedit.',
    img: 'https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'gadget',
    price: 200,
    stock: true,
  },
  {
    id: 2,
    title: 'Sony',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia illo illum facere architecto perspiciatis veritatis debitis voluptatum labore accusamus earum ipsa, velit, molestiae corporis aspernatur delectus quis deserunt impedit.',
    img: 'https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    price: 150,
    stock: true,
  },
  {
    id: 3,
    title: 'Laptop',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia illo illum facere architecto perspiciatis veritatis debitis voluptatum labore accusamus earum ipsa, velit, molestiae corporis aspernatur delectus quis deserunt impedit.',
    img: 'https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'gadget',
    price: 250,
    stock: true,
  },
  {
    id: 4,
    title: 'Home Theatre',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia illo illum facere architecto perspiciatis veritatis debitis voluptatum labore accusamus earum ipsa, velit, molestiae corporis aspernatur delectus quis deserunt impedit.',
    img: 'https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    price: 120,
    stock: true,
  },
  {
    id: 5,
    title: 'iPad',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia illo illum facere architecto perspiciatis veritatis debitis voluptatum labore accusamus earum ipsa, velit, molestiae corporis aspernatur delectus quis deserunt impedit.',
    img: 'https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'gadget',
    price: 230,
    stock: true,
  },
];
