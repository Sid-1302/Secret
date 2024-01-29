<h2>Authentication</h2>

Topics covered -
<ol>
  <li> <b>Username and Password</b> - Involves retrieving the username and it's corresponding passwords from the database. </li>
  <li> <b>Encryption</b> - mongoose-encryption package is used to encrypt the password while storing and decrypt while getting data      back from the database.</li>
  <li> <b>Hashing</b> - md5 package is used to convert any field , such as password to a hash function.</li>
  <li> <b>Salt Hashing</b> - bcrypt package is used to convert password to hash function , along with an additional string and iterating for multiple times (Salt Rounds) to get much stronger password.</li>
  <li> <b>Oauth *</b> - Third party verification such as facebook,google.</li>
</ol>
