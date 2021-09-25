import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
export default function Contents() {
	return (
		<div className="mt-3 mb-3">
			<h1>Contents</h1>
			


			<Table striped bordered hover>
				<thead>
					
					<tr>
						<th>#</th>
						<th>book</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							<Link to={{ pathname: "/1/1", search: "bookName=Genesis" }}>
								Genesis
							</Link>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>
							<Link to={{ pathname: "/2/1", search: "bookName=Exodus" }}>
								Exodus
							</Link>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>
							<Link to={{ pathname: "/3/1", search: "bookName=Leviticus" }}>
								Leviticus
							</Link>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>
							<Link to={{ pathname: "/4/1", search: "bookName=Numbers" }}>
								Numbers
							</Link>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>
							<Link to={{ pathname: "/5/1", search: "bookName=Deuteronomy" }}>
								Deuteronomy
							</Link>
						</td>
					</tr>
					<tr>
						<td>6</td>
						<td>
							<Link to={{ pathname: "/6/1", search: "bookName=Joshua" }}>
								Joshua
							</Link>
						</td>
					</tr>
					<tr>
						<td>7</td>
						<td>
							<Link to={{ pathname: "/7/1", search: "bookName=Judges" }}>
								Judges
							</Link>
						</td>
					</tr>
					<tr>
						<td>8</td>
						<td>
							<Link to={{ pathname: "/8/1", search: "bookName=Ruth" }}>
								Ruth
							</Link>
						</td>
					</tr>
					<tr>
						<td>9</td>
						<td>
							<Link to={{ pathname: "/9/1", search: "bookName=1%20Samuel" }}>
								1 Samuel
							</Link>
						</td>
					</tr>
					<tr>
						<td>10</td>
						<td>
							<Link to={{ pathname: "/10/1", search: "bookName=2%20Samuel" }}>
								2 Samuel
							</Link>
						</td>
					</tr>
					<tr>
						<td>11</td>
						<td>
							<Link to={{ pathname: "/11/1", search: "bookName=1%20Kings" }}>
								1 Kings
							</Link>
						</td>
					</tr>
					<tr>
						<td>12</td>
						<td>
							<Link to={{ pathname: "/12/1", search: "bookName=2%20Kings" }}>
								2 Kings
							</Link>
						</td>
					</tr>
					<tr>
						<td>13</td>
						<td>
							<Link
								to={{ pathname: "/13/1", search: "bookName=1%20Chronicles" }}
							>
								1 Chronicles
							</Link>
						</td>
					</tr>
					<tr>
						<td>14</td>
						<td>
							<Link
								to={{ pathname: "/14/1", search: "bookName=2%20Chronicles" }}
							>
								2 Chronicles
							</Link>
						</td>
					</tr>
					<tr>
						<td>15</td>
						<td>
							<Link to={{ pathname: "/15/1", search: "bookName=Ezra" }}>
								Ezra
							</Link>
						</td>
					</tr>
					<tr>
						<td>16</td>
						<td>
							<Link to={{ pathname: "/16/1", search: "bookName=Nehemiah" }}>
								Nehemiah
							</Link>
						</td>
					</tr>
					<tr>
						<td>17</td>
						<td>
							<Link to={{ pathname: "/17/1", search: "bookName=Esther" }}>
								Esther
							</Link>
						</td>
					</tr>
					<tr>
						<td>18</td>
						<td>
							<Link to={{ pathname: "/18/1", search: "bookName=Job" }}>
								Job
							</Link>
						</td>
					</tr>
					<tr>
						<td>19</td>
						<td>
							<Link to={{ pathname: "/19/1", search: "bookName=Psalms" }}>
								Psalms
							</Link>
						</td>
					</tr>
					<tr>
						<td>20</td>
						<td>
							<Link to={{ pathname: "/20/1", search: "bookName=Proverbs" }}>
								Proverbs
							</Link>
						</td>
					</tr>
					<tr>
						<td>21</td>
						<td>
							<Link to={{ pathname: "/21/1", search: "bookName=Ecclesiastes" }}>
								Eccliastes
							</Link>
						</td>
					</tr>
					<tr>
						<td>22</td>
						<td>
							<Link
								to={{
									pathname: "/22/1",
									search: "bookName=Song%20of%20Solomon",
								}}
							>
								Song of Solomon
							</Link>
						</td>
					</tr>
					<tr>
						<td>23</td>
						<td>
							<Link to={{ pathname: "/23/1", search: "bookName=Isaiah" }}>
								Isaiah
							</Link>
						</td>
					</tr>
					<tr>
						<td>24</td>
						<td>
							<Link to={{ pathname: "/24/1", search: "bookName=Jeremiah" }}>
								Jeremiah
							</Link>
						</td>
					</tr>
					<tr>
						<td>25</td>
						<td>
							<Link to={{ pathname: "/25/1", search: "bookName=Lamentations" }}>
								Lamentations
							</Link>
						</td>
					</tr>
					<tr>
						<td>26</td>
						<td>
							<Link to={{ pathname: "/26/1", search: "bookName=Ezekiel" }}>
								Ezekiel
							</Link>
						</td>
					</tr>
					<tr>
						<td>27</td>
						<td>
							<Link to={{ pathname: "/27/1", search: "bookName=Daniel" }}>
								Daniel
							</Link>
						</td>
					</tr>
					<tr>
						<td>28</td>
						<td>
							<Link to={{ pathname: "/28/1", search: "bookName=Hosea" }}>
								Hosea
							</Link>
						</td>
					</tr>
					<tr>
						<td>29</td>
						<td>
							<Link to={{ pathname: "/29/1", search: "bookName=Joel" }}>
								Joel
							</Link>
						</td>
					</tr>
					<tr>
						<td>30</td>
						<td>
							<Link to={{ pathname: "/30/1", search: "bookName=Amos" }}>
								Amos
							</Link>
						</td>
					</tr>
					<tr>
						<td>31</td>
						<td>
							<Link to={{ pathname: "/31/1", search: "bookName=Obadiah" }}>
								Obadiah
							</Link>
						</td>
					</tr>
					<tr>
						<td>32</td>
						<td>
							<Link to={{ pathname: "/32/1", search: "bookName=Jonah" }}>
								Jonah
							</Link>
						</td>
					</tr>
					<tr>
						<td>33</td>
						<td>
							<Link to={{ pathname: "/33/1", search: "bookName=Micah" }}>
								Micah
							</Link>
						</td>
					</tr>
					<tr>
						<td>34</td>
						<td>
							<Link to={{ pathname: "/34/1", search: "bookName=Nahum" }}>
								Nahum
							</Link>
						</td>
					</tr>
					<tr>
						<td>35</td>
						<td>
							<Link to={{ pathname: "/35/1", search: "bookName=Habakkuk" }}>
								Habakkuk
							</Link>
						</td>
					</tr>
					<tr>
						<td>36</td>
						<td>
							<Link to={{ pathname: "/36/1", search: "bookName=Zephaniah" }}>
								Zephaniah
							</Link>
						</td>
					</tr>
					<tr>
						<td>37</td>
						<td>
							<Link to={{ pathname: "/37/1", search: "bookName=Haggai" }}>
								Haggai
							</Link>
						</td>
					</tr>
					<tr>
						<td>38</td>
						<td>
							<Link to={{ pathname: "/38/1", search: "bookName=Zechariah" }}>
								Zechariah
							</Link>
						</td>
					</tr>
					<tr>
						<td>39</td>
						<td>
							<Link to={{ pathname: "/39/1", search: "bookName=Malachi" }}>
								Malachi
							</Link>
						</td>
					</tr>
					<tr>
						<td>40</td>
						<td>
							<Link to={{ pathname: "/40/1", search: "bookName=Matthew" }}>
								Matthew
							</Link>
						</td>
					</tr>
					<tr>
						<td>41</td>
						<td>
							<Link to={{ pathname: "/41/1", search: "bookName=Mark" }}>
								Mark
							</Link>
						</td>
					</tr>
					<tr>
						<td>42</td>
						<td>
							<Link to={{ pathname: "/42/1", search: "bookName=Luke" }}>
								Luke
							</Link>
						</td>
					</tr>
					<tr>
						<td>43</td>
						<td>
							<Link to={{ pathname: "/43/1", search: "bookName=John" }}>
								John
							</Link>
						</td>
					</tr>
					<tr>
						<td>44</td>
						<td>
							<Link to={{ pathname: "/44/1", search: "bookName=The%20Acts" }}>
								The Acts
							</Link>
						</td>
					</tr>
					<tr>
						<td>45</td>
						<td>
							<Link to={{ pathname: "/45/1", search: "bookName=Romans" }}>
								Romans
							</Link>
						</td>
					</tr>
					<tr>
						<td>46</td>
						<td>
							<Link
								to={{ pathname: "/46/1", search: "bookName=1%20Corinthians" }}
							>
								1 Corinthians
							</Link>
						</td>
					</tr>
					<tr>
						<td>47</td>
						<td>
							<Link
								to={{ pathname: "/47/1", search: "bookName=2%20Corinthians" }}
							>
								2 Corinthians
							</Link>
						</td>
					</tr>
					<tr>
						<td>48</td>
						<td>
							<Link to={{ pathname: "/48/1", search: "bookName=Galatians" }}>
								Galatians
							</Link>
						</td>
					</tr>
					<tr>
						<td>49</td>
						<td>
							<Link to={{ pathname: "/49/1", search: "bookName=Ephesians" }}>
								Ephesians
							</Link>
						</td>
					</tr>
					<tr>
						<td>50</td>
						<td>
							<Link to={{ pathname: "/50/1", search: "bookName=Philippians" }}>
								Philippians
							</Link>
						</td>
					</tr>
					<tr>
						<td>51</td>
						<td>
							<Link to={{ pathname: "/51/1", search: "bookName=Colossians" }}>
								Colossians
							</Link>
						</td>
					</tr>
					<tr>
						<td>52</td>
						<td>
							<Link
								to={{ pathname: "/52/1", search: "bookName=1%20Thessalonians" }}
							>
								1 Thessalonians
							</Link>
						</td>
					</tr>
					<tr>
						<td>53</td>
						<td>
							<Link
								to={{ pathname: "/53/1", search: "bookName=2%20Thessalonians" }}
							>
								2 Thessalonians
							</Link>
						</td>
					</tr>
					<tr>
						<td>54</td>
						<td>
							<Link to={{ pathname: "/54/1", search: "bookName=1%20Timothy" }}>
								1 Timothy
							</Link>
						</td>
					</tr>
					<tr>
						<td>55</td>
						<td>
							<Link to={{ pathname: "/55/1", search: "bookName=2%20Timothy" }}>
								2 Timothy
							</Link>
						</td>
					</tr>
					<tr>
						<td>56</td>
						<td>
							<Link to={{ pathname: "/56/1", search: "bookName=Titus" }}>
								Titus
							</Link>
						</td>
					</tr>
					<tr>
						<td>57</td>
						<td>
							<Link to={{ pathname: "/57/1", search: "bookName=Philemon" }}>
								Philemon
							</Link>
						</td>
					</tr>
					<tr>
						<td>58</td>
						<td>
							<Link to={{ pathname: "/58/1", search: "bookName=Hebrews" }}>
								Hebrews
							</Link>
						</td>
					</tr>
					<tr>
						<td>59</td>
						<td>
							<Link to={{ pathname: "/59/1", search: "bookName=James" }}>
								James
							</Link>
						</td>
					</tr>
					<tr>
						<td>60</td>
						<td>
							<Link to={{ pathname: "/60/1", search: "bookName=1%20Peter" }}>
								1 Peter
							</Link>
						</td>
					</tr>
					<tr>
						<td>61</td>
						<td>
							<Link to={{ pathname: "/61/1", search: "bookName=2%20Peter" }}>
								2 Peter
							</Link>
						</td>
					</tr>
					<tr>
						<td>62</td>
						<td>
							<Link to={{ pathname: "/62/1", search: "bookName=1%20John" }}>
								1 John
							</Link>
						</td>
					</tr>
					<tr>
						<td>63</td>
						<td>
							<Link to={{ pathname: "/63/1", search: "bookName=2%20John" }}>
								2 John
							</Link>
						</td>
					</tr>
					<tr>
						<td>64</td>
						<td>
							<Link to={{ pathname: "/64/1", search: "bookName=3%20John" }}>
								3 John
							</Link>
						</td>
					</tr>
					<tr>
						<td>65</td>
						<td>
							<Link to={{ pathname: "/65/1", search: "bookName=Judah" }}>
								Judah
							</Link>
						</td>
					</tr>
					<tr>
						<td>66</td>
						<td>
							<Link to={{ pathname: "/66/1", search: "bookName=Revelation" }}>
								Revelation
							</Link>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
