import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import cleanHtml from "@/until/cleanHtml";
import { Link } from "react-router-dom";
import { IconBinoculars, IconTrashX } from "@tabler/icons-react";
import { Spinner } from "@/components/ui/spinner";

export default function ListPost({
  posts = [],
  loading = false,
  onDeleteClick,
}) {
  return (
      <>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[35%]">TITLE</TableHead>
            <TableHead className="w-[45%]">CONTENT</TableHead>
            <TableHead className="text-center w-[20%]">ACTION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={3}>
                <div className="min-h-[300px] w-full flex items-center justify-center">
                  <Spinner />
                </div>
              </TableCell>
            </TableRow>
          ) : posts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3}>
                <div className="min-h-[300px] w-full flex items-center justify-center">
                  You have no posts yet.
                </div>
              </TableCell>
            </TableRow>
          ) : (
            posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell className="align-top">{post.title}</TableCell>

                <TableCell className="align-top max-w-[500px] text-ellipsis overflow-hidden whitespace-nowrap">
                  {cleanHtml(post.content)}
                </TableCell>

                <TableCell className="align-top">
                  <div className="flex items-center gap-2 justify-center">
                    <Link
                      to={`/blog-details/${post._id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      title="View this post"
                    >
                      <IconBinoculars stroke={2} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onDeleteClick(post._id, post.title)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      <IconTrashX stroke={2} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
}
