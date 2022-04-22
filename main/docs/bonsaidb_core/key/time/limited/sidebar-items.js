initSidebarItems({"enum":[["Days","A [`TimeResolution`] implementation that truncates time measurements to days. Internally, the number of days is represented as an `i32`, allowing a range of +/- ~5.88 million years."],["Hours","A [`TimeResolution`] implementation that truncates time measurements to hours. Internally, the number of hours is represented as an `i32`, allowing a range of +/- ~245,147 years."],["Microseconds","A [`TimeResolution`] implementation that truncates time measurements to microseconds. Internally, the number of microseconds is represented as an `i64`, allowing a range of +/- ~292,471 years."],["Milliseconds","A [`TimeResolution`] implementation that truncates time measurements to milliseconds. Internally, the number of milliseconds is represented as an `i64`, allowing a range of +/- ~292.5 million years."],["Minutes","A [`TimeResolution`] implementation that truncates time measurements to minutes. Internally, the number of minutes is represented as an `i32`, allowing a range of +/- ~4,086 years."],["Nanoseconds","A [`TimeResolution`] implementation that preserves nanosecond resolution. Internally, the number of microseconds is represented as an `i64`, allowing a range of +/- ~292.5 years."],["Seconds","A [`TimeResolution`] implementation that truncates time measurements to seconds. Internally, the number of seconds is represented as an `i64`, allowing a range of +/- ~21 times the age of the universe."],["SignedDuration","A [`Duration`] that can be either negative or positive."],["Weeks","A [`TimeResolution`] implementation that truncates time measurements to weeks. Internally, the number of weeks is represented as an `i32`, allowing a range of +/- ~41.18 million years."]],"struct":[["BonsaiEpoch","A [`TimeEpoch`] implementation that allows storing [`LimitedResolutionTimestamp`] relative to the 10-year anniversary of BonsaiDb: March 20, 2031 04:31:47 UTC."],["LimitedResolutionDuration","A [`Duration`] of time stored with a limited `Resolution`. This type may be preferred to [`std::time::Duration`] because `Duration` takes a full 12 bytes to achieve its nanosecond resolution."],["LimitedResolutionTimestamp","A timestamp (moment in time) stored with a limited `Resolution`. This type may be preferred to [`std::time::SystemTime`] because `SystemTime` serializes with nanosecond resolution. Often this level of precision is not needed and less storage and memory can be used."],["UnixEpoch","A [`TimeEpoch`] implementation that allows storing [`LimitedResolutionTimestamp`] relative to the “unix epoch”: January 1, 1970 00:00:00 UTC."]],"trait":[["AnyTimestamp","A timestamp that can report it sduration since the Unix Epoch."],["TimeEpoch","An epoch for [`LimitedResolutionTimestamp`]."],["TimeResolution","A resolution of a time measurement."]]});