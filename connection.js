server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url === '/addstudent') {
      let body = '';
  
      req.on('data', (chunk) => {
        body += chunk;
      });
  
      req.on('end', () => {
        const formData = new URLSearchParams(body);
  
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const dob = formData.get('dob');
        const parentName = formData.get('parentName');
        const address = formData.get('address');
        const city = formData.get('city');
        const phoneNumber = formData.get('phone');
  
        // Insert the student data into the database
        const insertQuery = `INSERT INTO Students (FirstName, LastName, DateOfBirth, ParentName, Address, City, PhoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [firstName, lastName, dob, parentName, address, city, phoneNumber];
  
        connection.query(insertQuery, values, (err, result) => {
          if (err) {
            console.error('Error inserting student data: ', err);
            res.statusCode = 500;
            res.end('Error inserting student data');
          } else {
            res.statusCode = 200;
            res.end('Student data inserted successfully');
          }
        });
      });
    }
  });
  