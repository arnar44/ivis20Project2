import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';


export default function About() {

    return (
        <React.Fragment>
            <div className='projectDescription'>
                <Link className='backLink' to="/">Back</Link>
                <div className='project'>
                    <h4>Project</h4>
                    <p>This is collected data from the WVS.</p>
                    <p>Originally, I wanted to look at laziness in each country and look at variables that could contribute to the laziness or be a result of the laziness. Laziness was only recently added to the WHS questioner, so I decided to look at Happiness and Life satisfaction instead and variables that I thought be relevant.</p>
                </div>
                <div className='findings'>
                    <h4>Findings</h4>
                    <p>Originally, I thought that “Happiness” and “Life Satisfaction” would have a clear connection and wanted to see what attributes affected these values. As it turns out, there does not seem to be a connection between the two. There is a lot to look at with all this data but here are some findings:</p>
                    <ul>
                        <li className='infoLi'>With all data included, Uzbekistan is the happiest country. We see that they have a higher than average emphasis on “Friend Importance”, higher than average “Education Level”, “Employment Status”. And are less “Religious” than the world average.  An interesting note as well is that in Uzbekistan the percentage of people that live with their parents is way higher than the world average. Put according to the coordinates it is usually the other way around (high living with parents % indicates less happiness) </li>
                        <li className='infoLi'>Russia is by far the unhappiest country. This is interesting because all other attributes are close to the world average. This might indicate that the selected attributes do not have as much to do with the countries happiness as originally thought.</li>
                        <li className='infoLi'>Oceania is the happiest continent. The only thing is seeming to have in common with Uzbekistan is that the population is way below average in the percentage of Religious participants. Other values seem to contradict what we thought we might be able to read from Uzbekistan.  </li>
                        <li className='infoLi'>One pattern we note is that more Religious countries tend to have a lover suicide acceptability, but this does not apply to all countries. </li>
                        <li className='infoLi'>It is difficult to find concrete connections in the data with these variables. I think that is because these variables are not giving us the full picture. For instance, I thought there would be a clear connection between “Living with Parents” and “Happiness” since most participants seem to be at an age that they would prefer to live alone. We can see a little pattern between the two but not as obvious as I thought, and I think that comes down to different cultures. For example, India has the highest participants living with their parents but has an average happiness percentage. Russia has one of the lower living with parent’s percentage but are by far the unhappiest. I think that culture plays a part there as well as the data missing some major attributes that might make participants more unhappy, for example the political landscape. </li>
                    </ul>
                </div>
                <div className='toolAndData'>
                    <h4>The Tool and the Data</h4>
                    <p>I hope to make this information more obvious later when I have the time via tooltips and such, but for now this explanation will have to do. </p>
                    <h5>The Tool</h5>
                    <p>The data has been mapped to parallel coordinates. The coordinates axis’s can be brushed, and they can be moved as well. The brush can be cleared by pressing the “Clear Brush” button. </p>
                    <p>The user can choose to manipulate the input data by using the blue buttons below the coordinates. Darker shade of blue is “selected” and lighter is “not selected”. The user can then decide from what timespan he wants his data to be. He can choose if what genders to display and if he wants the countries to be grouped into their continents or to show all countries. I note that there always needs to be some data on display, so for example the user cannot deselect all the time spans. </p>
                    <p>On the right there is a list that shows the countries or continents that are on display in the coordinates system. </p>
                    <p>Below the coordinates there is a detail view. The table is for averages and the spider graph is for percentages. The red color in the spider chart and the “Avrg of data on Display” column in the table shows the average of ALL the data on display in the graph. </p>
                    <p>By pressing a country or continent in the right hand side list, the spider chart will display a yellow color and the “Values of selected country/continent” column will fill up, these values are the values from the selected country and can then be compared to the average on display.</p>   
                    <h5>The Data</h5>
                    <ul>
                        <li className='infoLi'>Waves where collected from WVS. That data was then filtered on countries and attributes I selected.</li>
                        <li className='infoLi'>All data lines that had values below 0 was removed. Values below 0 means “Don’t know” or “No answer”. I did not want this to affect the data, so it was all removed.</li>
                        <li className='infoLi'><b>Importance of Family, Importance of Friends, Feeling of Happiness: </b>Participants answered from 1-4 (1 being very important/happy). I mapped 1 and 2 to Important/happy and 3 and 4 to not important7unhappy and then calculated the % of Important in the country</li>
                        <li className='infoLi'><b>Life satisfaction and Suicide justifiability:</b> Are on scale 1-10, 1 being completely dissatisfied/never justified and 10 being completely satisfied/always justified. This value I display as the average of the country.</li>
                        <li className='infoLi'><b>Sex: </b>Is binary and not displayed, only used for data manipulation.</li>
                        <li className='infoLi'><b>Religous Person: </b>Participants answered 1: Religious, 2: Not religious, 3: Atheist. I mapped this to Binary Religious or Not and display the percentage</li>
                        <li className='infoLi'><b>Employment Status: </b>Participants answered from 1-8. I mapped to 1: Employed 2: Unemployed. So, 1 can mean part time, student, housewife, i.e. everything except unemployed.  I then show the % of employed.</li>
                        <li className='infoLi'><b>Age: </b>Here I show the average</li>
                        <li className='infoLi'><b>Education Level: </b>Is on scale 1-9 where 1: No formal education and 9: University Level education with a degree. Here I show the country average. </li>
                        <li className='infoLi'>I then mapped each country to a continent</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}