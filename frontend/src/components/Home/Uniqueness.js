import React from 'react';
import Accord from './Accord'

const Uniqueness = () => { 
    const accordionData1 = [{
      img1: {},
      title1: '⌚｜Real-World Relevance ',
      content1: `Focused on tackling practical, real-world tasks and challenges. Guidance from
      mentors throughout. `
    },
    {
      title1: '📑｜Learning Methods',
      content1: `Progress is incentivized via team-based, collaborative learning systems. Hands-on &
      action-oriented. `
    },
    {
      title1: '👨‍🏫｜Credibility of Teachers',
      content1: `Mentors are industry-leading practitioners who bring their real-world wisdom to the
      program. `
    }, {
      title1: '📓｜Learning Environment',
      content1: `Location independent. Hosted in virtual classroom systems curated for better learning. `
    },{
      title1: '⌛｜Time Investments',
      content1: `Concludes within a few months or under a year. `
    } , {
      title1: '🛄｜Placement & Career Opportunities',
      content1: `A large number of placement opportunities from top companies across industries,
      multiple new-age career avenues. `
    }, {
      title1: '👨‍👨‍👧‍👧｜Community & Networking',
      content1: `Backed by a vast community of driven, passionate learners. Easy access to a huge
      pool of change-makers & renowned personalities. `
    }

  ]

    const accordionData2 = [ {
        title2: '📚｜Relevance of Curriculum',
        content2: `Present-day relevant, top-notch content - rivaling that of Ivy League colleges in quality. `
      },
      {
        title2: '📝｜Interaction & Guidance',
        content2: `Live one-to-one interaction with mentors & peers. Guided learning & mentoring. `
      },
      {
        title2: '🏫｜Flexibility of Schedules',
        content2: `Flexible schedules, consistency is achieved by making learning enjoyable. `
      }, {
        title2: '💰｜Cost & Affordability',
        content2: `Highly cost-effective, designed to maximize affordability. `
      } , {
        title2: '💱｜Unique Refund Policy',
        content2: `Get up to 100% refund of the fees paid by scoring good marks in scholarship.
        Maintain min 70% aggregate [Conceptual project ] to be eligible to appear for the
        scholarship and get a chance of getting a refund up to 100% back. `
      } , {
        title2: '✅｜Course Completion Rates',
        content2: `100% completion rate and a high number of successful outcomes from the programs. `
      } , {
        title2: '🔗｜Interlinked Services',
        content2: `Softskills + Development + Training + Analysis + Technical Skills and Logical Reasoning. `
      }
    ]

    return (
        <div className='accord'>
          <div class="container">
          <div className="accordion">
                {accordionData1.map(({title1, content1}) => (
                    <Accord title={title1} content ={content1} />
                ))}
            </div>
            <div className="accordion">
                {accordionData2.map(({title2, content2}) => (
                    <Accord title={title2} content ={content2} />
                ))}
            </div>
          </div>
        </div>
    );
}

export default Uniqueness;
