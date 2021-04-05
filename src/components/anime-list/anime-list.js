import React from 'react';
import {Link} from "react-router-dom";
import AnimeRow from "./anime-row";
import "./anime-list.css"

class AnimeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
          <div className="wbdv-table-wrapper">
            <table
                className="table table-borderless responsive">

              <thead className="wbdv-thead">
              <tr>
                <th>Anime</th>
                <th className="d-none d-sm-table-cell">Created</th>
                <th className="d-none d-lg-table-cell">Status</th>
                <th>
                  Actions


                </th>
              </tr>
              </thead>

              <tbody>
              <AnimeRow/>
              <AnimeRow/>
              {/*{this.props.courses.map((course) =>*/}
              {/*    <CourseRow*/}
              {/*        key={course._id}*/}
              {/*        course={course}*/}
              {/*        updateCourse={this.props.updateCourse}*/}
              {/*        deleteCourse={this.props.deleteCourse}*/}
              {/*        owner={course.owner}*/}
              {/*        lastModified={course.lastModified}*/}
              {/*        title={course.title}/>*/}
              {/*)}*/}
              </tbody>
            </table>
          </div>

    )
  }
}

export default AnimeList