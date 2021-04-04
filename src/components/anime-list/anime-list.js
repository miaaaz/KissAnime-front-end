import React from 'react';
import {Link} from "react-router-dom";
import AnimeRow from "./anime-row";

class AnimeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
          <div className="wbdv-table-wrapper shadow-sm rounded">
            <table
                className="table table-borderless responsive">

              <thead className="wbdv-thead">
              <tr>
                <td>Anime</td>
                <td className="d-none d-sm-table-cell">Created</td>
                <td className="d-none d-lg-table-cell">Status</td>
                <td>
                  Actions


                </td>
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