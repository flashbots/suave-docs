/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
interface IVideo {
  src: string;
  title: string;
}

function Video({src, title}: IVideo) {
  return (
    <div className="relative mb-3 h-0 w-full overflow-hidden pb-96">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute left-0 top-0 h-full w-full border-0"
      />
    </div>
  );
}

export default Video;
