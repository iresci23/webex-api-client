const JAVAPREFIX = 'java:com.webex.service.binding';

module.exports = {
	CreateMeeting: `CreateMeeting`,
	CreateTeleconferenceSession: `${JAVAPREFIX}.meeting.auo.CreateTeleconferenceSession`,
	DelMeeting: `${JAVAPREFIX}.meeting.DelMeeting`,
	GethosturlMeeting: `${JAVAPREFIX}.meeting.GethosturlMeeting`,
	GetjoinurlMeeting: `${JAVAPREFIX}.meeting.GetjoinurlMeeting`,
	GetMeeting: `${JAVAPREFIX}.meeting.GetMeeting`,
	GetTeleconferenceSession: `${JAVAPREFIX}.meeting.auo.GetTeleconferenceSession`,
	SetMeeting: `${JAVAPREFIX}.meeting.SetMeeting`,
	LstsummaryMeeting: `${JAVAPREFIX}.meeting.LstsummaryMeeting`,
	GetSite: `java:com.webex.service.binding.site.GetSite`
};
